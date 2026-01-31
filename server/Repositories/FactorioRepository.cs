using DuneWarLastFantasy;
using DuneWarLastFantasy.Models;
using PonyYear.Model;

namespace PonyYear.Repositories
{
    public class FactorioRepository
    {
        AppContextPostgree _context;
        public FactorioRepository(AppContextPostgree context) {
            _context = context;
        }
        public IEnumerable<Score> GetFactorio()
        {
             return _context.Score.ToList();
        }
        public bool CreateScore(Score score)
        {
            _context.Score.Add(score);
            _context.SaveChanges();
            return true;
        }
    }
}
