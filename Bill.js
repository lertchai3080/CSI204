let data = {
   companyName: "BANGKOK SMART CASD SYSTEM ",
   companyAddress: ["RECEIPT","Tax ID: 0105552012126"],
    
   ReceiptNoName: ["Receipt No:"]

   ,Dataandtimename: ["Date and time"]
   ,StationName: ["station Name:"]
   ,PosidName: ["POS ID:"]
   ,OperatoridName: ["Operator ID:"]
   ,CardidName: ["Card ID:"]
   ,CardnameName: ["Card Name"]
   ,OidremainingvalueName:["OID Remaining Value:"]
   ,AddvalueName:["Add Value:"]
   ,NewremainingvalueName:["New Remaining Value:"]
   ,AmountpayableName:["Amount Payable:"]
   ,AmountreceivedName:["Amaount Received:"]
   ,CashName:["Chash:"]
}

window.addEventListener("DOMContentLoaded",() => {
  
   const p = document.getElementById("company-name")
   p.innerText = data.companyName

    document.getElementById("company-name").innerText = data.companyName 

    let strhtml = ''
    for (let i = 0; i < data.companyAddress.length; i++){
        strhtml = strhtml + data.companyAddress[i] + '<br>'
    }
    console.log(strhtml)
    document.getElementById('companyaddress').innerHTML = strhtml

    document.getElementById('ReceiptnName').innerHTML = data.ReceiptNoName
    document.getElementById("Dataandtimename").innerHTML = data.Dataandtimename
    document.getElementById('Stationname').innerHTML = data.StationName
    document.getElementById('PosidName').innerHTML = data.PosidName
    document.getElementById('OperatoridName').innerHTML = data.OperatoridName
    document.getElementById('CardidName').innerHTML = data.CardidName
    document.getElementById('CardnameName').innerHTML = data.CardnameName
    document.getElementById('OidremainingvalueName').innerHTML = data.OidremainingvalueName
    document.getElementById('AddvalueName').innerHTML = data.AddvalueName
    document.getElementById('NewremainingvalueName').innerHTML = data.NewremainingvalueName
    document.getElementById('AmountpayableName').innerHTML = data.AmountpayableName
    document.getElementById('AmountreceivedName').innerHTML = data.AmountreceivedName
    document.getElementById('CashName').innerHTML = data.CashName
});