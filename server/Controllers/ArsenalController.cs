using DuneWarLastFantasy.Models;
using DuneWarLastFantasy.Models.other;
using Microsoft.AspNetCore.Mvc;
using PonyYear.Services;

namespace PonyYear.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArsenalController : ControllerBase
    {
        ArsenalService _arsenalService;

        public ArsenalController(ArsenalService arsenalService)
        {
            _arsenalService = arsenalService;
        }

        [HttpGet("GetArsenal")]
        public IEnumerable<Arsenal> GetFactorio()
        {
            return _arsenalService.GetArsenalList();
        }
    }
}
