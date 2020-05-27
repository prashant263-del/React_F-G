    // Declaring Array
    let customers = JSON.parse(localStorage.getItem('MyCustList') || "[]")

    // Storing records of feedback
    const addCustomer = (e) => {
        e.preventDefault();
        if(!e.target.closest('form').checkValidity() || !e.target.closest('form').reportValidity()) {
            e.target.closest('form').checkValidity()
            e.target.closest('form').reportValidity()
            return;
        }
       
        // Getting Radio Values from user
        const service = document.querySelector("input[name='service']:checked");
        const bvg = document.querySelector("input[name='bvg']:checked");
        const clean = document.querySelector("input[name='clean']:checked");
        const dine = document.querySelector("input[name='dine']:checked");

        const fname = document.querySelector("input[name='name']").value;
        const mailId = document.querySelector("input[name='mail']").value;
        const mobno = document.querySelector("input[name='phno']").value;


        // VALIDATIONS of Name, E-mail, Phone Number
        if(!((/^[a-zA-Z ]+$/.test(fname)) || fname.length==0)) {
            alert("Enter valid name");
            
        }
        else if(mailId.indexOf('@')<=0 || mailId.indexOf('@') == '') {
            alert("Invalid Email-Id-'Put @ at proper place'");
        } else if((mailId.charAt(mailId.length-4) != ".") && mailId.charAt(mailId.length-3) != "."){
            alert("Invalid E-mail-'Check your Email-Id'! ");
          } 
          else if(!(/^[7-9]\d{9}$/.test(mobno)) && !(mobno.length==10)){
              alert("Invalid mob no.");

          }
        
        else {
        
                    let customer = {
                        name: document.querySelector('#name').value,
                        email: document.querySelector('#mail').value,
                        phone: document.querySelector('#phno').value,
                        message: document.querySelector('#msg').value,
                        serviceRating: service ? service.value : 1,
                        bvgRating: bvg ? bvg.value : 1,
                        cleanRating: clean ? clean.value : 1,
                        dineRating: dine ? dine.value : 1,
                        
                    }
                    customers.push(customer);

                    console.warn('Thank You For your feedback');
                    alert("Thank you for completing the information");
                    document.forms[0].reset();

                    //saving to localStorage
                    localStorage.setItem('MyCustList', JSON.stringify(customers));
        }
    }

    // Clicking on Submit Button
    document.querySelector('#btn').addEventListener('click', addCustomer);