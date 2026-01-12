  // Add gtgTrigger class to phone number when user clicks Yes on Medicare Part A and Part B question
                  const phoneNumberElement =
                    document.getElementById("phone-number");
                  if (phoneNumberElement) {
                    phoneNumberElement.classList.add("gtgTrigger");
                    console.log("gtgTrigger added to phone number");
                  }
