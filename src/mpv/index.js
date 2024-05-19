const koffi = require("koffi");
const path = require("path");

// Load the shared library
const PATH_TO_LIB = path.resolve(__dirname, "libmpv-2.dll")
const lib = koffi.load(PATH_TO_LIB);


const mpv_handle = koffi.opaque("mpv_handle");

// Function decalrations
const mpv_client_api_version = lib.func("unsigned long mpv_client_api_version(void)");
const mpv_create = lib.func("mpv_handle *mpv_create(void)");
const mpv_initialize = lib.func("int mpv_initialize(mpv_handle *ctx)");
const mpv_command = lib.func("int mpv_command(mpv_handle *ctx, const char **args)");
const mpv_command_string = lib.func("int mpv_command_string(mpv_handle *ctx, const char *args)");
const mpv_get_property_string = lib.func("char *mpv_get_property_string(mpv_handle *ctx, const char *name)");
const mpv_set_property_string = lib.func("int mpv_set_property_string(mpv_handle *ctx, const char *name, const char *data)");
const mpv_set_option_string = lib.func("int mpv_set_option_string(mpv_handle *ctx, const char *name, const char *data)");
const mpv_set_option = lib.func(
    "int mpv_set_option(mpv_handle *ctx, const char *name, int format, void *data)"
); // Changed mpv_format -> int for format argument
const mpv_free = lib.func("void mpv_free(void *data)");


module.exports = {
    mpv_client_api_version,
    mpv_create,
    mpv_initialize,
    mpv_command,
    mpv_command_string,
    mpv_get_property_string,
    mpv_set_property_string,
    mpv_set_option_string,
    mpv_set_option,
    mpv_free
}


// const mpv = ffi.Library('mpv/libmpv-2.dll', {
//     // //   'mpv_wait_event': [ref.refType(mpv_event), ['long', 'double']],
//     // 'mpv_request_event': ['int', ['long', 'int', 'int']]
// });





// const handle = mpv_create();

// console.log(handle);



// mpv_set_option(handle, "wid", 4, koffi.as([1312954], "int64_t *"));


// mpv_initialize(handle);

// mpv_command(handle, ["loadfile", "test.mp4", null]);

// while (true) {}
