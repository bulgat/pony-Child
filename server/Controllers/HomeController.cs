using DuneWarLastFantasy.Models;
using Isopoh.Cryptography.Argon2;
using MD5Hash;
using Microsoft.AspNetCore.Mvc;
using PonyYear.Model;
using PonyYear.Services;
using Serilog;

namespace PonyYear.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        FactoryService _factoryService;
        private readonly ILogger<WeatherController> _logger;

        public HomeController(ILogger<WeatherController> logger, FactoryService factoryService)
        {
            _logger = logger;
            _factoryService = factoryService;
        }

        [HttpGet("GetScore")]
        public IEnumerable<Score> GetFactorio()
        {
            return _factoryService.GetFactorio();
        }
        [HttpPut("CreateScore")]
        public ActionResult CreateScore(string name)
        {
            bool result = _factoryService.CreateScore(
                new Score() { 
                    Name = name,
                    Family = name
                
                });
            if (result)
            {
                return Ok("Успешно сохранен");
            }
            return BadRequest("Ошибка сохранения");
        }
    }
}
