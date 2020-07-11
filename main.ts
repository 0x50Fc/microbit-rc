bluetooth.onBluetoothConnected(function () {
    images.iconImage(IconNames.Heart).showImage(0)
})
bluetooth.startUartService()
images.iconImage(IconNames.SmallDiamond).showImage(0)
basic.forever(function () {
	
})
