import myContacts from '../data/contact.tsx';


interface ContactProps {
  name: string;
  isOnline: boolean;
}

function Contact({ name, isOnline }: ContactProps) {
  return (
    <div className="contact">
      <div className="contactavatar">
        {name.charAt(0)}
        {isOnline && <div className="contactonlineBadge"></div>}
      </div>
      <p>{name}</p>
    </div>
  );
}

export default function RightPanel() {



  return (
    <div className="rightPanel">

      <div className="rightPanel__section">
        <h4>Sponsorisé</h4>
        <div className="sponsor">
          <p>Regardez le prochain match VCT EMEA</p>
        </div>
        <div className="sponsor">
          <p> Rejoignez la salle Basic-Fit la plus proche</p>
        </div>
      </div>

      <hr />

    
      <div className="rightPanel__section">
        <div className="rightPanel__header">
          <h4>Contacts</h4>
          <div className="rightPanel__icons"></div>
        </div>

        
        <div className="rightPanel__contacts">
          {myContacts.map((user, index) => (
            <Contact key={index} name={user.name} isOnline={user.isOnline} />
          ))}
        </div>
      </div>

      <hr />

  
      <div className="rightPanel__section">
        <h4>Discussions de groupe</h4>
        <Contact name="Serveur Survie Coop" isOnline={false} />
      </div>

      <button className="rightPanel__floatingBtn"></button>

    </div>
  );
}