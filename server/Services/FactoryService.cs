using DuneWarLastFantasy.Models;
using PonyYear.Model;
using PonyYear.Repositories;
using System.Net.Http.Headers;
using System.Xml.Linq;

namespace PonyYear.Services
{
    public class FactoryService
    {
        FactorioRepository _factorioRepository;
        public FactoryService(FactorioRepository factorioRepository) {
            _factorioRepository = factorioRepository;
        }

        public IEnumerable<Score> GetFactorio()
        {
            return _factorioRepository.GetFactorio();
        }
        public bool CreateScore(Score score)
        {
            try
            {
                return _factorioRepository.CreateScore(score);
            } catch(Exception err)
            {

            }
            return false;
        }
    }
}
