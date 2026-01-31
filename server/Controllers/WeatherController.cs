using Isopoh.Cryptography.Argon2;
using MD5Hash;
using Microsoft.AspNetCore.Mvc;
using PonyYear.Model;
using Serilog;

namespace PonyYear.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherController> _logger;

        public WeatherController(ILogger<WeatherController> logger)
        {
            _logger = logger;
  
        }

        [HttpGet("GetMd5")]
        public string GetMd5(string check)
        {
            string hash1 = check.GetMD5(EncodingType.UTF8);
            return hash1;
        }
        [HttpGet("GetArgon2")]
        public string GetArgon2(string check)
        {
            var passwordHash = Argon2.Hash(check);
            return passwordHash;
        }
        [HttpGet("GetLog")]
        public string Getlog() {
        
            return "_logger";
        }
    }
}
