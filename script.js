function openContacts(){
  let contacts = document.querySelectorAll(".contacts a");
    if (contacts[0].style.opacity === "0") {
      contacts.forEach(contact => {
        contact.style.opacity = "1";
      });
    } else {
      contacts.forEach(contact => {
        contact.style.opacity = "0";
      });
    }
}
