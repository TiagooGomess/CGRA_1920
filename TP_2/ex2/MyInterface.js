/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        this.gui.add(this.scene, 'displayDiamond').name('Display Diamond');
        this.gui.add(this.scene, 'displayMyTriangle').name('Display Triangle');
        this.gui.add(this.scene, 'displayMyParallelogram').name('Dis. Parallelogram');
        this.gui.add(this.scene, 'displayTriangleSmall').name('Dis. Triang. Small');
        this.gui.add(this.scene, 'displayTriangleSmall2').name('Dis. Triang. Small 2');
        this.gui.add(this.scene, 'displayTriangleBig').name('Dis. Triangle Big');
        this.gui.add(this.scene, 'displayMyTriangle2').name('Display Triangle 2')

        return true;
    }
}