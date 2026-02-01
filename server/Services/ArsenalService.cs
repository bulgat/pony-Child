using DuneWarLastFantasy.Models.other;
using Microsoft.EntityFrameworkCore;
using PonyYear.Repositories;

namespace PonyYear.Services
{
    public class ArsenalService
    {
        ArsenalRepository _arsenalRepository;
        public ArsenalService(ArsenalRepository arsenalRepository) {
            _arsenalRepository = arsenalRepository;
        }

        public IEnumerable<Arsenal> GetArsenalList()
        {
            return _arsenalRepository.GetArsenalList();
        }
    }
}
