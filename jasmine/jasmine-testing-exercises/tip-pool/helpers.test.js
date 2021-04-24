describe("Helper functions test (with setup and teardown)", function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it("should sum tip amount of allPayments on sumPaymentTotal()", function () {
        sumPaymentTotal("tipAmt");
        expect(sumPaymentTotal("tipAmt").toEqual(20));

        tipAmtInput.value = 5;
        billAmtInput.value = 80;
        submitPaymentInfo();
        expect(sumPaymentTotal("tipAmt").toEqual(25));
    });

    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });

    it('should sum total tip percent on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 200;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(30);
    });

    it("should calculate tip percentage with bill amount and tip amount on calculateTipPercent()", function () {
        expect(calculateTipPercent(100, 20).toEqual(20));
        expect(calculateTipPercent(250, 5).toEqual(2));
    })

    afterEach(function () {
        billAmtInput.value = "";
        tipAmtInput.value = "";
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = "";
        serverTbody.innerHTML = "";
        summaryTds[0].innerHTML = "";
        summaryTds[1].innerHTML = "";
        summaryTds[2].innerHTML = "";
    })
})




