import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class RiscoRepository {
	private path = './bd/risco.json';

	findAll() {
		const dados = fs.readFileSync(this.path, 'utf8');
		return JSON.parse(dados);
	}

	findById(id: number) {
		const itens = this.findAll();
		return itens.find((i) => i.id === id);
	}

	create(item: any) {
		const itens = this.findAll();
		const novoId = itens.length > 0 ? Math.max(...itens.map(e => e.id)) + 1 : 1;
		const novo = { id: novoId, ...item };
		itens.push(novo);
		fs.writeFileSync(this.path, JSON.stringify(itens, null, 2), 'utf8');
		return novo;
	}

	delete(id: number) {
		const itens = this.findAll();
		const idx = itens.findIndex(i => i.id === id);
		if (idx === -1) return false;
		itens.splice(idx, 1);
		fs.writeFileSync(this.path, JSON.stringify(itens, null, 2), 'utf8');
		return true;
	}

	update(id: number, item: any) {
		const itens = this.findAll();
		const idx = itens.findIndex(i => i.id === id);
		if (idx === -1) return false;
		itens[idx] = { id, ...item };
		fs.writeFileSync(this.path, JSON.stringify(itens, null, 2), 'utf8');
		return true;
	}

	patch(id: number, item: any) {
		const itens = this.findAll();
		const idx = itens.findIndex(i => i.id === id);
		if (idx === -1) return false;
		itens[idx] = { ...itens[idx], ...item };
		fs.writeFileSync(this.path, JSON.stringify(itens, null, 2), 'utf8');
		return true;
	}
}