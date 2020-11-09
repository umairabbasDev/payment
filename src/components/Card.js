import React from "react";

// function submitForm() {
//   CalculateHash();
//   var IntegritySalt = document.getElementById("salt").innerText;
//   var hash = CryptoJS.HmacSHA256(
//     document.getElementById("hashValuesString").value,
//     IntegritySalt
//   );
//   document.getElementsByName("pp_SecureHash")[0].value = hash + "";

//   console.log("string: " + hashString);
//   console.log("hash: " + document.getElementsByName("pp_SecureHash")[0].value);

//   document.jsform.submit();
// }

function Card() {
  return (
    <div>
      <h1>by Card</h1>
      <h3>JazzCash HTTP POST (Page Redirection) development phase</h3>
      <div className="jsformWrapper">
        <form
          name="jsform"
          method="post"
          action="https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/"
        >
          <input type="hidden" name="pp_Version" value="1.1" />
          <input type="hidden" name="pp_TxnType" value="MPAY" />
          <input type="hidden" name="pp_Language" value="EN" />
          <input type="hidden" name="pp_MerchantID" value="MC12607" />
          <input type="hidden" name="pp_SubMerchantID" value="" />
          <input type="hidden" name="pp_Password" value="yxs83t3529" />
          <input type="hidden" name="pp_BankID" value="TBANK" />
          <input type="hidden" name="pp_ProductID" value="RETL" />

          <div className="formFielWrapper">
            <label className="active">pp_TxnRefNo: </label>
            <input
              type="text"
              name="pp_TxnRefNo"
              id="pp_TxnRefNo"
              value="T20201109235742"
            />
          </div>

          <div className="formFielWrapper">
            <label className="active">pp_Amount: </label>
            <input type="text" name="pp_Amount" value="1000" />
          </div>

          <input type="hidden" name="pp_TxnCurrency" value="PKR" />
          <input type="hidden" name="pp_TxnDateTime" value="20201109235742" />
          <div className="formFielWrapper">
            <label className="active">pp_BillReference: </label>
            <input type="text" name="pp_BillReference" value="billRef" />
          </div>

          <div className="formFielWrapper">
            <label className="active">pp_Description: </label>
            <input
              type="text"
              name="pp_Description"
              value="Description of transaction"
            />
          </div>

          <input
            type="hidden"
            name="pp_TxnExpiryDateTime"
            value="20201110235742"
          />

          <div className="formFielWrapper">
            <label className="active">pp_ReturnURL: </label>
            <input type="text" name="pp_ReturnURL" value="ideotech-ma.com" />
          </div>

          <input type="hidden" name="pp_SecureHash" value="" />
          <input type="hidden" name="ppmpf_1" value="1" />
          <input type="hidden" name="ppmpf_2" value="2" />
          <input type="hidden" name="ppmpf_3" value="3" />
          <input type="hidden" name="ppmpf_4" value="4" />
          <input type="hidden" name="ppmpf_5" value="5" />
          <button type="button" onclick="submitForm()">
            Submit
          </button>
        </form>
        {/* style="display:none;" */}
        {/* <label id="salt" >
          y914g075s3
        </label> */}
        <br />
        <br />
        <div className="formFielWrapper">
          <label className="">Hash values string: </label>
          <input type="text" id="hashValuesString" value="" />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Card;

{
  /* <script>




</script>


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
