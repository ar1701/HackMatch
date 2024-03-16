const sampleData = [];

const names = ["John Smith", "Emma Johnson", "Michael Williams", "Sophia Jones", "William Brown", "Olivia Davis", "James Miller", "Ava Wilson", "Benjamin Moore", "Isabella Taylor"];
const emailProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"];
const skills = ["Python", "Java", "JavaScript", "C++", "HTML", "CSS", "Ruby", "Swift", "PHP", "SQL"];

for (let i = 0; i < 30; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomProvider = emailProviders[Math.floor(Math.random() * emailProviders.length)];
    const randomUsername = randomName.toLowerCase().replace(/\s/g, '') + Math.floor(Math.random() * 1000); // Random number appended to avoid duplicate emails
    const randomEmail = randomUsername + "@" + randomProvider;

    const numSkills = Math.floor(Math.random() * 5) + 1; // Generate between 1 and 5 skills
    const randomSkills = [];
    for (let j = 0; j < numSkills; j++) {
        const randomSkill = {
            name: skills[Math.floor(Math.random() * skills.length)],
            level: Math.floor(Math.random() * 10) + 1 // Generate skill level between 1 and 10
        };
        randomSkills.push(randomSkill);
    }

    const randomLinkedInUrl = "linkedin.com/" + Math.random().toString(36).substring(7); // Random string for LinkedIn URL
    const randomGitHubUrl = "github.com/" + Math.random().toString(36).substring(7); // Random string for GitHub URL

    const randomLinks = [
        { name: "LinkedIn", url: randomLinkedInUrl },
        { name: "GitHub", url: randomGitHubUrl }
    ];
    
    sampleData.push({
        name: randomName,
        email: randomEmail,
        skills: randomSkills,
        links: randomLinks
    });
}

module.exports = {data: sampleData};
