define('TWOverflow/autoDeposit/interface', [
    'TWOverflow/autoDeposit',
    'TWOverflow/FrontButton',
    'TWOverflow/locale'
], function (
    autoDeposit,
    FrontButton,
    Locale
) {
    var opener

    function DepositInterface () {
        opener = new FrontButton('Deposit', {
            classHover: false,
            classBlur: false,
            tooltip: Locale('deposit', 'description')
        })

        opener.click(function () {
            if (autoDeposit.isRunning()) {
                autoDeposit.stop()
                autoDeposit.secondVillage.stop()
                opener.$elem.removeClass('btn-red').addClass('btn-green')

                emitNotif('success', Locale('deposit', 'deactivated'))
            } else {
                autoDeposit.start()
                autoDeposit.secondVillage.start()
                opener.$elem.removeClass('btn-green').addClass('btn-red')

                emitNotif('success', Locale('deposit', 'activated'))
            }
        })
    }

    autoDeposit.interface = DepositInterface
})
