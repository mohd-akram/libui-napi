const {AreaBrush, AreaPath, AreaStrokeParams} = require('../..');
const UiDrawMatrix = require('./matrix');

/**
 * A draw brush
 */
class DrawBrush {
	/**
	 * @return {UiArea}
	 */
	constructor() {
		this.handle = AreaBrush.create();
	}

	set color(value) {
		AreaBrush.setColor(this.handle, value.r, value.g, value.b, value.a);
	}

	get color() {
		return AreaBrush.getColor(this.handle);
	}

	set type(value) {
		AreaBrush.setType(this.handle, value);
	}

	get type() {
		return AreaBrush.getType(this.handle);
	}

	/**
	 * Set the gradient stops
	 * @param {Array<BrushGradientStop>} value - the gradients stops
	 * @return {string}
	 */
	set stops(value) {
		AreaBrush.setStops(this.handle, value.map(x => x.handle));
	}

	/**
	 * Get the gradient stops
	 * @return {Array<BrushGradientStop>}
	 */
	get stops() {
		return AreaBrush.getStops(this.handle);
	}

	/**
	 * Set the start position of the gradient
	 * (Radial gradients: the inner circle's center)
	 * @param {Object} pos - the coordinates
	 * @return {undefined}
	 */
	set start(value) {
		AreaBrush.setStart(this.handle, value.x, value.y);
	}

	/**
	 * Get the start position of the gradient
	 * (Radial gradients: the inner circle's center)
	 * @return {Object}
	 */
	get start() {
		return AreaBrush.getStart(this.handle);
	}

	/**
	 * Set the end position of the gradient
	 * (Radial gradients: the outer circle's center)
	 * @param {Object} pos - the coordinates
	 * @return {undefined}
	 */
	set end(value) {
		AreaBrush.setEnd(this.handle, value.x, value.y);
	}

	/**
	 * Get the end position of the gradient
	 * (Radial gradients: the outer circle's center)
	 * @return {Object}
	 */
	get end() {
		return AreaBrush.getEnd(this.handle);
	}

	/**
	 * Set the radius of the gradient's outer circle (radial gradients only)
	 * @param {number} r - the outer radius
	 * @return {undefined}
	 */
	set outerRadius(value) {
		return AreaBrush.setOuterRadius(this.handle, value);
	}

	/**
	 * Get the radius of the gradient's outer circle (radial gradients only)
	 * @return {number}
	 */
	get outerRadius() {
		return AreaBrush.getOuterRadius(this.handle);
	}
}

DrawBrush.type = {
	solid: 0,
	linearGradient: 1,
	radialGradient: 2
}

class BrushGradientStop {
	constructor(pos, color, g, b, a) {
		if (typeof g === 'undefined') {
			this.handle =
				AreaBrush.stop_create(pos, color.r || 0, color.g || 0, color.b || 0,
									  typeof color.a === 'undefined' ? 1 : color.a);
		} else {
			this.handle = AreaBrush.stop_create(pos, color, g, b, a);
		}
	}

	set pos(value) {
		AreaBrush.stop_setPos(this.handle, value);
	}

	get pos() {
		return AreaBrush.stop_getPos(this.handle);
	}

	set color(value) {
		AreaBrush.stop_setColor(this.handle, value.r || 0, value.g || 0, value.b || 0,
								typeof value.a === 'undefined' ? 1 : value.a);
	}

	get color() {
		return AreaBrush.stop_getColor(this.handle);
	}
}

class UiDrawPath {
	constructor(mode) {
		mode = typeof a === 'undefined' ? UiDrawPath.fillMode.winding : mode;
		this.handle = AreaPath.create(mode);
	}

	addRectangle(x, y, width, height) {
		AreaPath.addRectangle(this.handle, x, y, width, height);
	}

	newFigure(x, y) {
		AreaPath.newFigure(this.handle, x, y);
	}

	newFigureWithArc(xCenter, yCenter, radius, startAngle, sweep, negative) {
		Areapath.newFigureWithArc(this.handle, xCenter, yCenter, radius, startAngle,
								  sweep, negative);
	}

	lineTo(x, y) {
		AreaPath.lineTo(this.handle, x, y);
	}

	arcTo(xCenter, yCenter, radius, startAngle, sweep, negative) {
		AreaPath.arcTo(this.handle, xCenter, yCenter, radius, startAngle, sweep,
					   negative);
	}

	bezierTo(c1x, c1y, c2x, c2y, endX, endY) {
		AreaPath.bezierTo(this.handle, c1x, c1y, c2x, c2y, endX, endY);
	}

	closeFigure() {
		AreaPath.closeFigure(this.handle);
	}

	end() {
		AreaPath.end(this.handle);
	}
}

UiDrawPath.fillMode = {
	winding: 0,
	alternate: 1
};

class DrawStrokeParams {
	constructor() {
		this.handle = AreaStrokeParams.create();
	}

	set thickness(v) {
		AreaStrokeParams.setThickness(this.handle, v);
	}

	get thickness() {
		return AreaStrokeParams.getThickness(this.handle);
	}

	set lineCap(v) {
		AreaStrokeParams.setLineCap(this.handle, v);
	}

	get lineCap() {
		return AreaStrokeParams.getLineCap(this.handle);
	}

	set lineJoin(v) {
		AreaStrokeParams.setLineJoin(this.handle, v);
	}

	get lineJoin() {
		return AreaStrokeParams.getLineJoin(this.handle);
	}

	set miterLimit(v) {
		AreaStrokeParams.setMiterLimit(this.handle, v);
	}

	get miterLimit() {
		return AreaStrokeParams.getMiterLimit(this.handle);
	}

	set dashes(v) {
		AreaStrokeParams.setDashes(this.handle, v);
	}

	get dashes() {
		return AreaStrokeParams.getDashes(this.handle);
	}

	set dashPhase(v) {
		AreaStrokeParams.setDashPhase(this.handle, v);
	}

	get dashPhase() {
		AreaStrokeParams.getDashPhase(this.handle);
	}
}

DrawStrokeParams.lineCap = {
	flat: 0,
	round: 1,
	square: 2
};

DrawStrokeParams.lineJoin = {
	miter: 0,
	round: 1,
	bevel: 2
};

module.exports = {
	DrawBrush,
	BrushGradientStop,
	UiDrawPath,
	DrawStrokeParams,
	UiDrawMatrix
};