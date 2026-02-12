using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using PostgresAPI.Models;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))); //DefaultConnection er deklarert i appsettings.json

builder.Services.AddEndpointsApiExplorer();


builder.Services.AddOpenApi();

var app = builder.Build();

if(app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUi(options =>
    {
        options.DocumentPath = "/openapi/v1.json";
    });
    
}

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
