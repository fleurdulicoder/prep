function Sword(desc) {
	this.weaponType = "Sword";
	this.metal = desc.metal || "Steel";
	this.style = desc.style || "Longsword";
	this.hasMagic = desc.hasMagic || false;
}

function Bow(desc) {
	this.weaponType = "Bow";
	this.metal = desc.metal || "Wood";
	this.style = desc.style || "Longsword";
	this.hasMagic = desc.hasMagic || false;
}

function WeaponFactory() {};

WeaponFactory.prototype.makeWeapon = function(desc) {
	var WeaponClass = null;
	if (desc.weaponType === "Sword") {
		WeaponClass = Sword;
	} else if (desc.weaponType === "Bow") {
		WeaponClass = Bow;
	} else {
		return false;
	}
	return new WeaponClass(desc);
};

var myWeaponFactory = new WeaponFactory();
var bladeFist = myWeaponFactory.makeWeapon({
	weaponType: "Sword",
	metal: "Dark Iron",
	style: "Scytche",
	hasMagic: true
});

function getInfo() {
	console.log(this.weaponType + " crafted from " + this.metal + " & style is "+ this.style + " & has magic - "+this.hasMagic);
}

getInfo.call(bladeFist);
