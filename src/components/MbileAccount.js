import React,{useRef} from "react";
import axios from "axios";
import { sha256 } from 'js-sha256';



function MbileAccount() {

  function hndle() {
  var d = new Date();
  d = new Date(d.getTime() - 3000000);
  var date_format_str = d.getFullYear().toString()+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString());
  console.log(date_format_str);

  
   var mydata = {
    
        pp_Version: "1.1",
        pp_TxnType: "MWALLET",
        pp_Language : "EN",
        pp_MerchantID: "MC12607",
        pp_SubMerchantID: "",
        pp_Password: "yxs83t3529",
        pp_BankID: "",
        pp_ProductID: "",
        pp_TxnRefNo: "T20201112025442",
        pp_Amount: "1000",
        pp_TxnCurrency: "PKR",
        pp_TxnDateTime: "20201112185500",
        pp_BillReference: "billRef",
        pp_Description: "Description",
        pp_TxnExpiryDateTime: "20201113185500",
        pp_ReturnURL: "http://ideotech-ma.com/",
        pp_SecureHash: "1AC78B753E935EC864255830BA5EFAD1EC44223DFCCAD6D1F84500EFC90D6571",
        ppmpf_1: "03123456789",
     
    }
  

  const url ="hhttps://sandbox.jazzcash.com.pk/ApplicationAPI/API/Payment/DoTransaction";

  axios
    .post(url,mydata)
    .then((response) => {
        console.log('working,', response);
    })
    .catch((err) => {
      console.log(`😱 request failed: ${err}`);
    });

}


//   function intosh(mydata) {

//     var str ='';
//    Object.entries(mydata).forEach(entry => {
//   const [key, value] = entry;
//       str = str +'&'+value; 
//       // console.log(`${key}: ${value}`);
//     })
//     var ssh = sha256.hmac('y914g075s3', str);
//     return ssh
//   }

    
    // console.log(textInput.current.value);
  



  return (
    <div>
        
     <input
            onClick={hndle}
            type="button"
            name="pp_TxnType"
            value="click to send request"
          />
          {/* <input
            // ref={pp_Language}
            // onChange={(event) => setpp_Language(event.target.value)}
            type="text"
            name="pp_Language"
            value="EN"
          /> */}
      </div> 
  );
}

export default MbileAccount;

{
  /* <style>
body {
    background: #fff;
}

form {
    margin: 0;
    padding: 0;
}

.jsformWrapper {
    border: 1px solid rgba(196, 21, 28, 0.50);
    padding: 2rem;
    width: 600px;
    margin: 0 auto;
    border-radius: 2px;
    margin-top: 2rem;
    box-shadow: 0 7px 5px #eee;
    height: 350px;
}

    .jsformWrapper .formFielWrapper label {
        width: 300px;
        float: left;
    }

    .jsformWrapper .formFielWrapper input {
        width: 300px;
        padding: 0.5rem;
        border: 1px solid #ccc;
        float: left;
        font-family: sans-serif;
    }

    .jsformWrapper .formFielWrapper {
        float: left;
        margin-bottom: 1rem;
    }

    .jsformWrapper button {
        background: rgba(196, 21, 28, 1);
        border: none;
        color: #fff;
        width: 120px;
        height: 40px;
        line-height: 25px;
        font-size: 16px;
        font-family: sans-serif;
        text-transform: uppercase;
        border-radius: 2px;
        cursor: pointer;
    }

h3 {
    text-align: center;
    margin-top: 3rem;
    color: rgba(196, 21, 28, 1);
}
_msg{
    background-color: yellow;
    font-size: 14px;


}
</style>
<script>
function submitForm() {

    CalculateHash();
    var IntegritySalt = document.getElementById("salt").innerText;
    var hash = CryptoJS.HmacSHA256(document.getElementById("hashValuesString").value, IntegritySalt);
    document.getElementsByName("pp_SecureHash")[0].value = hash + '';

    console.log('string: ' + hashString);
    console.log('hash: ' + document.getElementsByName("pp_SecureHash")[0].value);

    document.jsform.submit();
}



</script>
<script src="https://sandbox.jazzcash.com.pk/Sandbox/Scripts/hmac-sha256.js"></script>



<script>
function CalculateHash() {
    var IntegritySalt = document.getElementById("salt").innerText;
    hashString = '';

    hashString += IntegritySalt + '&';

    if (document.getElementsByName("pp_Amount")[0].value != '') {
        hashString += document.getElementsByName("pp_Amount")[0].value + '&';
    }
    if (document.getElementsByName("pp_BankID")[0].value != '') {
        hashString += document.getElementsByName("pp_BankID")[0].value + '&';
    }
    if (document.getElementsByName("pp_BillReference")[0].value != '') {
        hashString += document.getElementsByName("pp_BillReference")[0].value + '&';
    }
    if (document.getElementsByName("pp_Description")[0].value != '') {
        hashString += document.getElementsByName("pp_Description")[0].value + '&';
    }
    if (document.getElementsByName("pp_Language")[0].value != '') {
        hashString += document.getElementsByName("pp_Language")[0].value + '&';
    }
    if (document.getElementsByName("pp_MerchantID")[0].value != '') {
        hashString += document.getElementsByName("pp_MerchantID")[0].value + '&';
    }
    if (document.getElementsByName("pp_Password")[0].value != '') {
        hashString += document.getElementsByName("pp_Password")[0].value + '&';
    }
    if (document.getElementsByName("pp_ProductID")[0].value != '') {
        hashString += document.getElementsByName("pp_ProductID")[0].value + '&';
    }
    if (document.getElementsByName("pp_ReturnURL")[0].value != '') {
        hashString += document.getElementsByName("pp_ReturnURL")[0].value + '&';
    }
    if (document.getElementsByName("pp_SubMerchantID")[0].value != '') {
        hashString += document.getElementsByName("pp_SubMerchantID")[0].value + '&';
    }
    if (document.getElementsByName("pp_TxnCurrency")[0].value != '') {
        hashString += document.getElementsByName("pp_TxnCurrency")[0].value + '&';
    }
    if (document.getElementsByName("pp_TxnDateTime")[0].value != '') {
        hashString += document.getElementsByName("pp_TxnDateTime")[0].value + '&';
    }
    if (document.getElementsByName("pp_TxnExpiryDateTime")[0].value != '') {
        hashString += document.getElementsByName("pp_TxnExpiryDateTime")[0].value + '&';
    }
    if (document.getElementsByName("pp_TxnRefNo")[0].value != '') {
        hashString += document.getElementsByName("pp_TxnRefNo")[0].value + '&';
    }
    if (document.getElementsByName("pp_TxnType")[0].value != '') {
        hashString += document.getElementsByName("pp_TxnType")[0].value + '&';
    }
    if (document.getElementsByName("pp_Version")[0].value != '') {
        hashString += document.getElementsByName("pp_Version")[0].value + '&';
    }
    if (document.getElementsByName("ppmpf_1")[0].value != '') {
        hashString += document.getElementsByName("ppmpf_1")[0].value + '&';
    }
    if (document.getElementsByName("ppmpf_2")[0].value != '') {
        hashString += document.getElementsByName("ppmpf_2")[0].value + '&';
    }
    if (document.getElementsByName("ppmpf_3")[0].value != '') {
        hashString += document.getElementsByName("ppmpf_3")[0].value + '&';
    }
    if (document.getElementsByName("ppmpf_4")[0].value != '') {
        hashString += document.getElementsByName("ppmpf_4")[0].value + '&';
    }
    if (document.getElementsByName("ppmpf_5")[0].value != '') {
        hashString += document.getElementsByName("ppmpf_5")[0].value + '&';
    }

    hashString = hashString.slice(0, -1);
    document.getElementById("hashValuesString").value = hashString;
}

</script>
 */
}
