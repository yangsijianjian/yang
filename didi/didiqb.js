
let body = JSON.parse($response.body);

if (body.data.popData && body.data.popData.dialog) {
    delete body.data.popData.dialog.buoyLandingUrl;
}

body.data.cardList = body.data.cardList.filter(card => {
  if (card.detailData) {
    if (card.detailData.discountList) {
      card.detailData.discountList = card.detailData.discountList.filter(discount => 
        !["信用卡额度", "滴滴专属"].includes(discount.mname)
      );
    }
    
    if ('myCreditLimit' in card.detailData) {
      delete card.detailData.myCreditLimit;
    }

    if (["借钱", "信用卡", "滴滴保", "我的额度"].includes(card.detailData.mname)) {
      return false;
    }

    if (card.detailData.billCard && card.detailData.billCard.title === "滴滴支付") {
      return false;
    }

    if (card.detailData.icon1) {
      card.detailData.icon1.forEach(icon => delete icon.cornerContent);
    }
    if (card.detailData.icon2) {
      card.detailData.icon2.forEach(icon => delete icon.cornerContent);
    }
  }

  if (card.mcode === "market_banner_v6" || card.cardId === "bizcard_loan_v6" || card.cardId === "bizcard_creditCard_v6") {
    return false;
  }

  return true;
});

body.data.chinesename = " ";

$done({ body: JSON.stringify(body) });