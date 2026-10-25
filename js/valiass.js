// js/valiass.js

// స్టాఫ్ యాడ్ చేసే ఫంక్షన్
function addStaff(event) {
    event.preventDefault(); // ఫారమ్ రీలోడ్ అవ్వకుండా ఆపడం
    
    // విలువలు తీసుకోవడం
    const role = document.getElementById('staffRole').value;
    const name = document.getElementById('staffName').value;
    const phone = document.getElementById('staffPhone').value;
    const dob = document.getElementById('staffDob').value;

    // మాస్టర్ పిన్ ఫార్ములా (Dummy Calculation)
    const masterPin = 919720 - parseInt(dob);
    
    // ప్రస్తుతానికి Dummy Alert (తర్వాత ఇక్కడ Firestore వస్తుంది)
    alert(`✅ Staff Added Successfully!\n\nName: ${name}\nRole: ${role}\nPhone: ${phone}\nMaster PIN: ${masterPin}\n\nPlease share this PIN with the staff.`);
    
    // ఫారమ్ క్లియర్ చేయడం
    document.getElementById('addStaffForm').reset();
}

// స్టాఫ్ డిలీట్ చేసే ఫంక్షన్
function deleteStaff(name) {
    if(confirm(`Are you sure you want to delete ${name}?`)) {
        alert(`${name} deleted successfully.`);
        // తర్వాత ఇక్కడ Firestore Delete కోడ్ వస్తుంది
    }
}
