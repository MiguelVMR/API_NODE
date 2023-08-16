import { Sequelize } from 'sequelize';
import databaseconfig from '../config/database';

import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];

const connection = new Sequelize(databaseconfig);

models.forEach((model) => model.init(connection));
