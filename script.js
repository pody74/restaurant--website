document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
  
    if (name === "" || phone === "") {
      document.getElementById("booking-message").textContent = "يرجى تعبئة جميع الحقول.";
      return;
    }
  
    document.getElementById("booking-message").textContent = "تم إرسال طلب الحجز! سنقوم بالتواصل معك قريبًا.";
    this.reset();
  });
  