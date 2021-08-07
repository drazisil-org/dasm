import { Dasm } from "../src/index";

describe("Dasm Core", () => {
  it("should be able to be created with it's static create() method", async () => {
    const dasm = await Dasm.create("dummyFile")

    expect(dasm.filePath).toEqual("dummyFile");
  });

  it("should have a status of loadSuccess === false, if file loading failed", async () => {
    const dasm = await Dasm.create("dummyFile");

    expect(dasm.status.loading).toBeFalsy()
  });

  it("should have a lastError set, if path is not a file", async () => {
    const dasm = await Dasm.create("./testFiles");

    expect(dasm.status.lastError.toString()).toMatch(/not a valid file/i)
  });


  it("should have a status of loadSuccess === true, if file loading was successful", async () => {
    const dasm = await Dasm.create("./testFiles/cabview.dll");

    expect(dasm.status.loading).toBeTruthy()
  });
});
