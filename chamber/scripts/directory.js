const jsonData = 'data.json';

// Json table in console
async function showData() {
    const response = await fetch(jsonData);
    const data = await response.json();
    companiesInformation(data.companies);
    console.table(data.companies);
}

showData();

const companiesInformation = (companies) => {
    const companiesContainer = document.querySelector('.post-directory');

    companies.forEach(company => {
        // Create html elements
        const postBox = document.createElement('div');
        const postImg = document.createElement('img');
        const name = document.createElement('h2');
        const companyDescription = document.createElement('p');
        const companySpecialization = document.createElement('p');
        const companyaddress = document.createElement('p');
        const companyphone = document.createElement('p');
        const companywebsite = document.createElement('p');
        const companyMembership = document.createElement('h3');

        // Add classes
        postBox.classList.add('post-box-directory');
        postImg.classList.add('post-img');
        name.classList.add('company-name');
        companyDescription.classList.add('post-description');
        companySpecialization.classList.add('post-text');
        companyaddress.classList.add('post-text');
        companyphone.classList.add('post-text');
        companywebsite.classList.add('post-text');

        // Add content
        name.textContent = company.name;
        postImg.setAttribute('src', 'images/' + company.image);
        companyDescription.textContent = company.description;
        companySpecialization.textContent = 'Specialization: ' + company.specialization;
        companyaddress.textContent = 'Address: ' + company.address;
        companyphone.textContent = 'Phone: ' + company.phone;
        companywebsite.textContent = 'Website: ' + company.website;
        companyMembership.textContent = 'Membership: ' + company.membership_level;

        // Append elements
        postBox.appendChild(postImg);
        postBox.appendChild(name);
        postBox.appendChild(companyDescription);
        postBox.appendChild(companySpecialization);
        postBox.appendChild(companyaddress);
        postBox.appendChild(companyphone);
        postBox.appendChild(companywebsite);
        postBox.appendChild(companyMembership);

        companiesContainer.appendChild(postBox);
    });
}