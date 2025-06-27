// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Mcptest } from '../client';

export abstract class APIResource {
  protected _client: Mcptest;

  constructor(client: Mcptest) {
    this._client = client;
  }
}
