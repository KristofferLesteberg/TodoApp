FROM mcr.microsoft.com/dotnet/sdk:10.0 AS Build



WORKDIR /App

COPY . /App/

RUN dotnet restore

RUN dotnet publish -c Release -o /App/publish

FROM mcr.microsoft.com/dotnet/aspnet:10.0 

WORKDIR /App

COPY --from=build /App/publish .

EXPOSE 8080

ENTRYPOINT [ "dotnet", "TodoApp.dll"]
