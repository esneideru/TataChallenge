using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tata.Web.Api.Models
{
    public class Texto
    {
        public string TextoPlano { get; set; }
        public List<Palabras> Palabras { get; set; }
    }
}
