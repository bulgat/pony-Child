using Serilog;

var builder = WebApplication.CreateBuilder(args);

//Log.Logger = new LoggerConfiguration()
  //  .CreateLogger();
//Log.Information("##Starting up");
Log.Logger = new LoggerConfiguration().MinimumLevel.Debug().WriteTo.File("logs/myapp.txt", rollingInterval: RollingInterval.Day).CreateLogger();
//Запись в базу данных
/*
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .WriteTo.MSSqlServer(connectionString, "Logs")
    .CreateLogger();
*/
Log.Information("##Starting up");

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddOpenApi();
 

var app = builder.Build();

app.UseCors(builder =>
    builder
      .WithOrigins("http://localhost:3000")
      .AllowAnyHeader()
      .AllowAnyMethod()
      .AllowCredentials()
  );

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
