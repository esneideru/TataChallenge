using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tata.Web.Api.Helpers
{
    public class Hash
    {
        public static string Create(string value, string salt)
        {
            if (!string.IsNullOrEmpty(value))
            {

                var valueBytes = KeyDerivation.Pbkdf2(
                                    password: value,
                                    salt: Encoding.UTF8.GetBytes(salt),
                                    prf: KeyDerivationPrf.HMACSHA512,
                                    iterationCount: 10000,
                                    numBytesRequested: 256 / 8);

                return Convert.ToBase64String(valueBytes);
            }

            return null;
        }

        public static bool Validate(string value, string salt, string hash) => Create(value, salt) == hash;
    }
}
