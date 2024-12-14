




    // Members Info (Image and Bio)
    const membersData = [
        {name: 'Victoria Beckham', imageUrl: 'https://th.bing.com/th/id/OIP.FV8v_Co7LMp4lpRRtEjRKgAAAA?rs=1&pid=ImgDetMain', bio: 'The fashion-forward "Posh Spice" known for her chic style and understated elegance.'},
        {name: 'Melanie Brown', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Melanie_Brown_2017.jpg', bio: 'Known as "Scary Spice," Mel B is a powerhouse performer with an infectious personality.'},
        {name: 'Emma Bunton', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Emma_Bunton_2017.jpg', bio: 'The sweet and sassy "Baby Spice," Emma brought a playful, youthful charm to the group.'},
        {name: 'Geri Halliwell', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Geri_Halliwell_2016.jpg', bio: 'Known as "Ginger Spice," Geri is the bold, fiery spirit who helped propel the group to global stardom.'},
        {name: 'Melanie Chisholm', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Melanie_C_2014.jpg', bio: '"Sporty Spice" is the athletic and energetic member who brings a competitive edge to the group.'}
    ];

    membersData.forEach(member => {
        const bioDiv = document.createElement('div');
        bioDiv.className = 'bio';
        const memberImg = document.createElement('img');
        memberImg.src = member.imageUrl;
        memberImg.alt = member.name;
        const memberName = document.createElement('h3');
        memberName.textContent = member.name;
        const memberBio = document.createElement('p');
        memberBio.textContent = member.bio;

        // Adding innerHTML to bioDiv
        bioDiv.innerHTML = `<strong>${member.name}</strong>: ${member.bio}`;
 
        
        bioDiv.appendChild(memberImg);
        bioDiv.appendChild(memberName);
        bioDiv.appendChild(memberBio);

// Add event listener to each bio to alert the Spice Girl's name on hover
bioDiv.addEventListener('mouseover', function() {
    alert(`${member.name} is in the house!`);
});


}
const aboutTitle = document.createElement('h2');
const browser = document.createElement("p");
  browser.innerHTML = ` 
    ${window.navigator.appCodeName} | 
    ${window.navigator.appName} | 
    ${version}`;