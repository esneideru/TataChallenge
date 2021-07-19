using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tata.Web.Api.DTOs
{
    public class UsuarioTokenDTO
    {
        public string Nombre { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public DateTime Expiracion { get; set; }
    }
}
