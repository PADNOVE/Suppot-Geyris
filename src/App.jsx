import './index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
/* import "bootstrap-icons/font/bootstrap-icons.css"; */
import React from 'react';

/*<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  integrity="sha512-z3gLpd7yknf1YoNbCzq6Nj2z1J8h5O6z5VJ5DtkQ2z0U6pU+0hUynWZ7MJ6z6+e1bR2ZUg8c6JYl1fM6E36suQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/> */


function App() {
  /* const [formData, setFormData] = useState({
    platform: "",
    message: "",
    phone: "",
    email: "",
    confirmEmail: "",
    countryCode: "US+1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert("Les adresses e-mail ne correspondent pas !");
      return;
    }
    console.log("Form Data:", formData);
    alert("Formulaire soumis avec succès !");
  }; */

  return (
    <>
      <h1> Bienvenue sur <br /> Le Support de Logiciel Geyris </h1>
      
      <p>
        Nous sommes là pour vous accompager et vous aider à trouver la solution à votre problème. <br />
        Veillez vérifier que vous avez bien la dernière version de votre logiciel avant de nous contacter et consultez notre FAQ.
      </p>

      <h4>Consulter les formulaires de questions suivantes pour <br />
        voir si ça répond à votre besoin.</h4>
      
      <div className="section-title">
          <h3>Pour les utilisateurs :</h3>
      </div>
      
      <div className="button-group">
        <div className="sub-button-group">
          <h3> Demande d'Assistance</h3>
          <p>
            Pour les problèmes techniques, les questions sur l'utilisation du logiciel,
            ou toute autre demande d'aide.
          </p>
          <a href="https://geyris.com/assistance/" target="_blank" rel="noopener noreferrer">
            <button>Assistance</button>
          </a>
        </div>

        <div className="sub-button-group">
          <h3> Demande de Fonctionnalité</h3>
          <p>
            Pour suggérer de nouvelles fonctionnalités ou des améliorations aux fonctionnalités
            existantes.
          </p>
          <a href="https://geyris.com/developpement/" target="_blank" rel="noopener noreferrer">
            <button>Développement</button>
          </a>
        </div>

        <div className="sub-button-group">
          <h3> Demande de Formation</h3>
          <p>
            Pour organiser des sessions de formation ou des ateliers sur l'utilisation du logiciel.
          </p>
          <a href="https://geyris.com/formation/" target="_blank" rel="noopener noreferrer">
            <button>Formation</button>
          </a>
        </div>

        <div className="sub-button-group">
          <h3> Rapport de Bug</h3>
          <p>
            Pour signaler des bugs ou des problèmes que vous avez rencontrés en utilisant le logiciel.
          </p>
          <a href="https://geyris.com/bugs/" target="_blank" rel="noopener noreferrer">
            <button>Rapport de bugs</button>
          </a>
        </div>

        <div className="sub-button-group">
          <h3> Suggestions</h3>
          <p>
            Pour partager vos idées et suggestions afin d'améliorer nos produits et services.
          </p>
          <a href="https://geyris.com/suggestions/" target="_blank" rel="noopener noreferrer">
            <button>Suggestions</button>
          </a>
        </div>
        <div className="sub-button-group">
          <h3> Demande de Partenariat</h3>
          <p>
            Pour explorer des opportunités de collaboration et de partenariat avec Geyris.
          </p>
          <a href="https://geyris.com/partenariat/" target="_blank" rel="noopener noreferrer">
            <button>Partenariat</button>
          </a>
        </div>
      </div>

    <div className="form">
      <form onSubmit={''/* handleSubmit */}
        className="group-form">
        <h3>Contactez Geyris</h3>
        <h4>Assistance Geyris</h4>
        <p>
          Pour mieux vous aider, dites-nous comment vous utilisez Geyris en fournissant <br/>
            les informations nécessaires quand vous nous contactez.
          Vous pouvez aussi nous écrire directement à l'adresse e-mail ci-dessous. :  
        </p>
        
        <p>
            Par exemple, quand vous nous contactez au sujet d'un problème technique, <br />
            veuillez inclure des détails tels que la version de Geyris que vous utilisez, <br />
            le système d'exploitation de votre appareil, et toute étape spécifique pour reproduire le problème.
            Cela nous aidera à diagnostiquer et résoudre votre problème rapidement et plus efficace.
        </p>
        
        <div className='contacts'>
            <h5>
              • Appels :
              (+228) 92 11 31 89 / 79 96 52 58 <br />
              (+224) 610 41 69 49
            </h5>
            <h5>
              • WhatsApp :
              (+228) 79 96 52 58 / 98 81 53 03
            </h5>
            <h5>
              • E-mail :
              contacts@padnove.com
            </h5>
            <h5>
              • Site web :
              www.padnove.com
            </h5>
        </div>


        {/* Téléphone */}
        {/* <div className='phone-input'>
          <label className="name">Numéro de téléphone</label>
          <div className="choix">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className=""
            >
              <option value="US+1">TG +228</option>
              <option value="US+1">BN +229</option>
              <option value="US+1">GN +224</option>
              <option value="US+1">GH +233</option>
              <option value="US+1">BF +226</option>
              <option value="US+1">US +1</option>
              <option value="FR+33">FR +33</option>
              <option value="MA+212">MA +212</option>
              <option value="CI+225">CI +225</option>
              <option value="SN+221">SN +221</option>
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Votre numéro Geyris"
              required
            />
          </div>
        </div>

        {/* Plateforme *
        <div>
          <p className="">Comment utilisez-vous Geyris ?</p>
          <div className="">
            {["Android", "iPhone", "Web et bureau", "KaiOS", "Autre"].map(
              (option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="platform"
                    value={option}
                    checked={formData.platform === option}
                    onChange={handleChange}
                    className=""
                    required
                  />
                  <span>{option}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Email *
        <div>
          <label className="font-semibold block mb-2">Adresse e-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        {/* Confirmation Email *
        <div>
          <label className="font-semibold block mb-2">
            Confirmez votre adresse e-mail
          </label>
          <input
            type="email"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

       
        <div>
          <label className="font-semibold block mb-2">
            Veuillez saisir votre message ci-dessous.
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring focus:ring-green-400"
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-800 transition"
        >
          Envoyer
        </button> */}
        </form>
      </div>

      <footer>
        <img src="geyris.png" alt="Logo Geyris" className="logo" />
        <h4>Besoin d'aide supplémentaire ?</h4>
        <p>
          Consultez notre FAQ ou contactez-nous directement pour toute question ou préoccupation.
        </p>
          <a href="https://geyris.com/faq/" target="_blank" rel="noopener noreferrer">
            <button> • Consulter la FAQ</button>
          </a>
          <a href="https://geyris.com/contact/" target="_blank" rel="noopener noreferrer">
            <button> • Nous contacter</button>
        </a>
        <div className="social-icons">
          <a href='https://www.facebook.com/share/1BMxin4MpR/' target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fa-brands fa-facebook fs-4"></i>
          </a>
          <a href='https://x.com/Geyris_?t=GqzvpA0Hj5XIM7YnsD1R-g&s=09' target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fa-brands fa-x-twitter fs-4"></i>
          </a>
          <a href='https://www.linkedin.com/company/geyris/' target="_blank" rel="noopener noreferrer" className="text-white"> 
            <i className="fa-brands fa-linkedin fs-4"></i>
          </a>
        </div>
        {/* <div className="">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white"><i className="bi bi-facebook fs-4"></i></a>
            <a href="https://x.com/Padnove?t=83t-Ozjb9rEUnJf7qSfs2A&s=09" target="_blank" rel="noopener noreferrer" className="text-white"><i className="bi bi-twitter fs-4"></i></a>
            <a href="https://www.linkedin.com/company/padnove/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="bi bi-linkedin fs-4"></i></a>
        </div> */}
        <p>© 2025 Geyris - Tous droits réservés</p>
      </footer>
    </>
  )
}

export default App
