using DuneWarLastFantasy;
using DuneWarLastFantasy.Models.other;

namespace PonyYear.Repositories
{
    public class ArsenalRepository
    {
        AppContextPostgree _context;
        public ArsenalRepository(AppContextPostgree context) {
            _context = context;
        }

        public IEnumerable<Arsenal> GetArsenalList() {
            return _context.Arsenal.ToList();
        }
    }
}
