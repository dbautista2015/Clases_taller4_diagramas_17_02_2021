class Espada{
    constructor(material, durabilidad, efecto){
        this.dano=10;
        this.material = material;
        this.info = [];
        this.setMaterial = material;
        this.setDurabilidad =durabilidad;
        this.info.push(this.getDano, durabilidad, efecto);
    }
    atacar(){
        let durabilidad = this.getDurabilidad;
        let info ="";
        if(durabilidad <=0 && this.getMaterial !=null){
            this.setMaterial = null;
            info = `Daño realizado ${this.info[0]} Durabilidad 'exploto' Efecto al enemigo ${this.info[3]}`;
        }else if (durabilidad>0){
            durabilidad--;
            info = `Daño realizado ${this.info[0]} Durabilidad ${this.info[2]} / ${this.getDurabilidad} Efecto al enemigo ${this.info[3]}  `;
            this.setDurabilidad = durabilidad;
        }else{
            info = `Golpeo con la mano`;
        }
        return info;
    }
    defender(){
        //no lleva nada    
    }
    set setDurabilidad(durabilidad){
        this.durabilidad = durabilidad;
    }
    get getDurabilidad(){
        return this.durabilidad;
    }
    set setDano(Dano){
        this.dano = Dano;
    }
    get getDano(){
        return this.dano;
    }
    // set setBonus(bonus){
    //     this.bonus.push() = material;
    // }
    /**
     * @param {any} material
     */
    set setMaterial(material){
        this.material = material;
        switch (material) {
            case "Madera":
                this.info[0] = (this.getDano+5);
                break;
            case "Piedra":
                this.info[0] = (this.getDano+15);
                break;
            case "Hierro":
                this.info[0] = (this.getDano+25);
                break;
            default:
                break;
        }
    }
    get getMaterial(){
        return this.material;
    }

}
class EspadaMadera extends Espada{
    constructor(material, durabilidad, efecto){
        super(material, durabilidad, efecto);
    }
}
class EspadaPiedra extends EspadaMadera{
    constructor(material, durabilidad, efecto){
        super(material, durabilidad, efecto);
    }
}
class EspadaHierro extends EspadaPiedra{
    constructor(material, durabilidad, efecto){
        super(material, durabilidad, efecto);
    }
}

const obj = new EspadaMadera("Madera", 2, "");
const obj2 = new EspadaHierro("Hierro", 2, "Infección");
const obj3 = new EspadaPiedra("Piedra", 2, "Lentitud");

console.log(obj.atacar);
console.log(obj.atacar);
console.log(obj2.atacar);
console.log(obj2.atacar);
console.log(obj3.atacar);
console.log(obj3.atacar);