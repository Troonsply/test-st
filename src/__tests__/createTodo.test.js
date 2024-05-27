import {mockTodo} from '../__mocks__/todos.mock';
import {createTodo, createTodoOnServer} from '../createTodo';


jest.mock('uuid',
    () => ({v4: () => 'uuid'}));

global.fetch = jest.fn(() =>
    Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockTodo)
        }
    ));
describe('createTodo', () => {
    it(
        'should return todo object with provided title, completed and id',
        () => {
            const title = 'Learn jest';
            const result = createTodo(title);
            expect(result).toEqual({title, completed: false, id: 'uuid'});
        }
    );
    it('should create todo server', async () => {
        const result = await createTodoOnServer('Todo 2');
        expect(result).toEqual(mockTodo);
        expect(fetch).toHaveBeenCalledTimes(1)
    });
    it('should throw an error if fetch response is not ok', async () => {
        fetch.mockResolvedValueOnce('Network error');
        await expect(createTodoOnServer('Todo 2')).rejects.toThrowError();
    });
    it('should throw an error from fn when response is not ok',
        async () => {
            fetch.mockResolvedValueOnce({ok: false});
            await expect(createTodoOnServer('Todo 2')).rejects.toThrowError();
        })
});