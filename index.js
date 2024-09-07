document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const dateInput = document.getElementById('date');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Formun varsayılan submit davranışını engelle

    const dateValue = dateInput.value; // Kullanıcının girdiği tarihi al
    if (!dateValue) {
      alert('Please enter your date of birth.');
      return;
    }
    
    const birthDate = new Date(dateValue);
    const today = new Date();
    
    if (birthDate > today) {
      alert('Date of birth cannot be in the future.');
      return;
    }
    
    const age = calculateAge(birthDate, today);
    alert(`You are ${age} years old.`);
  });

  function calculateAge(birthDate, today) {
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Eğer doğum günü henüz geçmediyse yaşı bir azalt
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
});
