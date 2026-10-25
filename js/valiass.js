// js/valiass.js

function addStaff(event) {
    event.preventDefault();
    
    const role = document.getElementById('staffRole').value;
    const name = document.getElementById('staffName').value;
    const phone = document.getElementById('staffPhone').value;
    const dob = document.getElementById('staffDob').value;

    // మాస్టర్ పిన్ ఫార్ములా
    const masterPin = 919720 - parseInt(dob);
    
    alert(`✅ Staff Added Successfully!\n\nName: ${name}\nRole: ${role}\nPhone: ${phone}\nMaster PIN: ${masterPin}\n\nPlease share this PIN with the staff.`);
    
    document.getElementById('addStaffForm').reset();
}

function deleteStaff(name) {
    if(confirm(`Are you sure you want to delete ${name}?`)) {
        alert(`${name} deleted successfully.`);
    }
}
