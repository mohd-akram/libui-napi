const {Entries} = require('..');

class UiEntryBase {
	constructor(handle) {
		this.handle = handle;
	}

	/**
	 * Set or return the the content of the entry.
	 * @return {string}
	 */
	get text() {
		return Entries.getText(this.handle);
	}

	set text(value) {
		Entries.setText(this.handle, String(value));
	}

	/**
	 * Whether the user is allowed to change the entry text.
	 * @return {boolean}
	 */
	get readOnly() {
		return Entries.getReadOnly(this.handle);
	}

	set readOnly(value) {
		Entries.setReadOnly(this.handle, Boolean(value));
	}

	/**
	 * Add a listener to the `changed` event. Emitted whenever the entry content changed.
	 *
	 * @param  {Function} callback - callback to execute when the event is fired.
	 * @return {undefined}
	 */
	onChanged(callback) {
		Entries.onChanged(this.handle, callback);
	}
}

module.exports = {UiEntryBase};