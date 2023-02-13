export class TransactionsService {
  static async create(repository, transaction) {
    return await repository.create(transaction);
  }

  static async getAll(repository) {
    return await repository.getAll();
  }

  static async edit(repository, id, transaction) {
    return await repository.edit(id, transaction);
  }

  static async delete(repository, id) {
    return await repository.delete(id);
  }
}