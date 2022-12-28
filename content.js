console.log('content running')

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);
  if (message.txt === 'hello') {

    subject = document.querySelector('[name="subject"]')
    custom = document.getElementById("custom-message")
    fullName = document.getElementsByTagName('h1')[0].innerHTML
    firstName = fullName.substring(0, fullName.indexOf(' '))

    if(subject) {
        console.log('subject')
        subject.value = "UWaterloo CS undergrad looking for internship opportunities"
        body = document.querySelector('[role="textbox"]');
        body.innerHTML = `<p>Hi ${firstName}, \n\n<br><br>I'm a 3rd year UWaterloo CS undergrad (graduating April 2024) with a prior internship at Qualcomm, incoming at Cisco this summer, looking to get more experience over the Winter, and was wondering if you had any software engineering roles? I'd be really interested in the same should an opportunity exist!\n\n<br><br>I've attached my resume for reference, please feel free to reach out if you find my profile a fit!\n\n<br><br>Best,\n<br>Prajval</p>`

        // attachButton = document.querySelector('[type="attachment"]')
    }

    if(custom) {
        console.log('custom')
        document.getElementById("custom-message").value = `Hi ${firstName} I'm a 3rd year UWaterloo CS undergrad (graduating April 2024) with a prior internship at Qualcomm, incoming at Cisco this summer, looking to get more experience over the Winter, was wondering if you had any SWE roles? I\'d be really interested in the same should an opportunity exist!`
    }
  }
}