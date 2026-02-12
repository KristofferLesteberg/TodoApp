FROM mcr.microsoft.com/dotnet/sdk:10.0 AS Build

WORKDIR /App

COPY . /App/

RUN dotnet restore


FROM mcr.microsoft.com/dotnet/aspnet:10.0

WORKDIR /App

COPY --from=buld /App/Out .

EXPOSE 8080

ENTRYPOINT ["dotnet", "TodoApi.dll"]
