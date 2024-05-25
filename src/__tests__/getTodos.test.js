import axios from "axios";
import {getTodos} from "../getTodos";

const axiosSpy = jest.spyOn(axios, 'get');
;
const errorSpy = jest.spyOn(console, 'error');
describe('getTodos', () => {
    // beforeEach(() => {
    //     axiosSpy = jest.spyOn(axios, 'get');
    // })
    afterEach(() => {
        jest.clearAllMocks();
        // jest.restoreAllMocks();
    })
    it('should return an empty array in case of error  and print error to console', async () => {
        const errorMessage = 'ERROR'
        //axiosSpy.mockImplementationOnce(() => Promise.reject(errorMessage));
        axiosSpy.mockRejectedValueOnce(errorMessage);
        const res = await getTodos();
        expect(errorSpy).toHaveBeenCalledWith(errorMessage);
        expect(res).toEqual([]);
    });

    it('should return 200 todos using axios.get', async () => {
        const res = await getTodos()
        expect(axiosSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos');
        expect(res).toHaveLength(200);
    });
})