import React from "react";

import Window from "../../components/Window/Window";
import ContactContent from "../../components/BoxContent/ContactContent/ContactContent";

const Contact = () => {
  return (
    <Window width={400} height={400} title="Contact">
      <ContactContent />
    </Window>
  );
};

export default Contact;
