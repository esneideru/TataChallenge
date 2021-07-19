using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tata.Web.Api.Models
{
    public class PalabrasRepetidas
    {

        private Texto texto;
        private Dictionary<string, int> repeatedCount;

        public PalabrasRepetidas(string textoplano)
        {
            texto = new Texto();
            repeatedCount = new Dictionary<string, int>();
            texto.TextoPlano = textoplano;
        }


        public Texto ProcesarTexto()
        {
            string[] Value = texto.TextoPlano.Split(' ');

            foreach (var item in Value)
            {
                string localItem = item.ToLower().Replace(",", "").Replace(".", "").Trim();

                if (!string.IsNullOrEmpty(localItem))
                {
                    if (repeatedCount.ContainsKey(localItem))
                    {
                        int count = repeatedCount[localItem];
                        repeatedCount[localItem] = count + 1;
                    }
                    else
                    {
                        repeatedCount.Add(localItem, 1);
                    }
                }
            }

            List<Palabras> listPalabras = new List<Palabras>();
            texto.TextoPlano = texto.TextoPlano;

            foreach (KeyValuePair<string, int> value in repeatedCount)
            {
                Palabras palabra = new Palabras();
                palabra.Palabra = value.Key;
                palabra.Cantidad = value.Value;

                listPalabras.Add(palabra);
            }

            texto.Palabras = listPalabras;

            return texto;
        }
    }
}
