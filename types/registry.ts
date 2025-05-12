/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/registry.json`.
 */
export type Registry = {
  "address": "E2FcHsC9STeB6FEtxBKGAwMTX7cbfYMyjSHKs4QbBAmh",
  "metadata": {
    "name": "registry",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addClientToRegistry",
      "discriminator": [
        198,
        64,
        62,
        101,
        62,
        204,
        69,
        108
      ],
      "accounts": [
        {
          "name": "entry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "accountToAdd"
              },
              {
                "kind": "account",
                "path": "registry"
              }
            ]
          }
        },
        {
          "name": "registry"
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "accountToAdd",
          "type": "pubkey"
        },
        {
          "name": "until",
          "type": "i64"
        },
        {
          "name": "limit",
          "type": "u32"
        }
      ]
    },
    {
      "name": "addNodeToRegistry",
      "discriminator": [
        135,
        249,
        13,
        74,
        61,
        190,
        188,
        33
      ],
      "accounts": [
        {
          "name": "entry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "accountToAdd"
              },
              {
                "kind": "account",
                "path": "registry"
              }
            ]
          }
        },
        {
          "name": "registry"
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "accountToAdd",
          "type": "pubkey"
        },
        {
          "name": "domain",
          "type": "string"
        }
      ]
    },
    {
      "name": "checkClient",
      "discriminator": [
        56,
        122,
        178,
        30,
        199,
        2,
        243,
        22
      ],
      "accounts": [
        {
          "name": "entry",
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "accountToCheck"
              },
              {
                "kind": "account",
                "path": "registry"
              }
            ]
          }
        },
        {
          "name": "registry"
        }
      ],
      "args": [
        {
          "name": "accountToCheck",
          "type": "pubkey"
        }
      ],
      "returns": {
        "defined": {
          "name": "clientInfo"
        }
      }
    },
    {
      "name": "checkNode",
      "discriminator": [
        62,
        101,
        38,
        142,
        134,
        79,
        122,
        116
      ],
      "accounts": [
        {
          "name": "entry",
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "accountToCheck"
              },
              {
                "kind": "account",
                "path": "registry"
              }
            ]
          }
        },
        {
          "name": "registry"
        }
      ],
      "args": [
        {
          "name": "accountToCheck",
          "type": "pubkey"
        }
      ],
      "returns": {
        "defined": {
          "name": "nodeInfo"
        }
      }
    },
    {
      "name": "delegateNodeAccount",
      "discriminator": [
        177,
        5,
        63,
        9,
        89,
        233,
        39,
        75
      ],
      "accounts": [
        {
          "name": "bufferNode",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  98,
                  117,
                  102,
                  102,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "node"
              }
            ]
          }
        },
        {
          "name": "delegationRecordNode",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  108,
                  101,
                  103,
                  97,
                  116,
                  105,
                  111,
                  110
                ]
              },
              {
                "kind": "account",
                "path": "node"
              }
            ],
            "program": {
              "kind": "account",
              "path": "delegationProgram"
            }
          }
        },
        {
          "name": "delegationMetadataNode",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  108,
                  101,
                  103,
                  97,
                  116,
                  105,
                  111,
                  110,
                  45,
                  109,
                  101,
                  116,
                  97,
                  100,
                  97,
                  116,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "node"
              }
            ],
            "program": {
              "kind": "account",
              "path": "delegationProgram"
            }
          }
        },
        {
          "name": "node",
          "docs": [
            "CHECK The pda to delegate"
          ],
          "writable": true
        },
        {
          "name": "registry"
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "ownerProgram",
          "address": "E2FcHsC9STeB6FEtxBKGAwMTX7cbfYMyjSHKs4QbBAmh"
        },
        {
          "name": "delegationProgram",
          "address": "DELeGGvXpWV2fqJUhqcF5ZSYMS4JTLjteaAMARRSaeSh"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "account",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "initRegistry",
      "discriminator": [
        131,
        22,
        4,
        103,
        24,
        94,
        163,
        239
      ],
      "accounts": [
        {
          "name": "registry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "authority"
              },
              {
                "kind": "arg",
                "path": "name"
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "removeClientFromRegistry",
      "discriminator": [
        32,
        83,
        79,
        126,
        155,
        239,
        104,
        60
      ],
      "accounts": [
        {
          "name": "entry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "accountToDelete"
              },
              {
                "kind": "account",
                "path": "registry"
              }
            ]
          }
        },
        {
          "name": "registry"
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "accountToDelete",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "removeNodeFromRegistry",
      "discriminator": [
        96,
        10,
        183,
        238,
        187,
        248,
        96,
        36
      ],
      "accounts": [
        {
          "name": "entry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "accountToDelete"
              },
              {
                "kind": "account",
                "path": "registry"
              }
            ]
          }
        },
        {
          "name": "registry"
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "accountToDelete",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "undelegateNodeAcount",
      "discriminator": [
        215,
        20,
        17,
        214,
        131,
        184,
        155,
        117
      ],
      "accounts": [
        {
          "name": "node",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "account"
              },
              {
                "kind": "account",
                "path": "registry"
              }
            ]
          }
        },
        {
          "name": "registry"
        },
        {
          "name": "receiver",
          "writable": true,
          "signer": true
        },
        {
          "name": "magicProgram",
          "address": "Magic11111111111111111111111111111111111111"
        },
        {
          "name": "magicContext",
          "writable": true,
          "address": "MagicContext1111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "account",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "updateNodeActive",
      "discriminator": [
        121,
        150,
        132,
        175,
        172,
        145,
        197,
        132
      ],
      "accounts": [
        {
          "name": "entry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "accountToUpdate"
              },
              {
                "kind": "account",
                "path": "registry"
              }
            ]
          }
        },
        {
          "name": "registry"
        },
        {
          "name": "authorityNode",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "authority"
              },
              {
                "kind": "account",
                "path": "registry"
              }
            ]
          }
        },
        {
          "name": "authority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "accountToUpdate",
          "type": "pubkey"
        },
        {
          "name": "active",
          "type": "bool"
        }
      ]
    },
    {
      "name": "updateNodeOnline",
      "discriminator": [
        35,
        22,
        232,
        250,
        60,
        30,
        62,
        83
      ],
      "accounts": [
        {
          "name": "entry",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "accountToUpdate"
              },
              {
                "kind": "account",
                "path": "registry"
              }
            ]
          }
        },
        {
          "name": "registry"
        },
        {
          "name": "authority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "accountToUpdate",
          "type": "pubkey"
        },
        {
          "name": "online",
          "type": "i32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "clientEntry",
      "discriminator": [
        68,
        218,
        150,
        47,
        57,
        1,
        247,
        170
      ]
    },
    {
      "name": "nodeEntry",
      "discriminator": [
        226,
        29,
        121,
        132,
        47,
        28,
        209,
        67
      ]
    },
    {
      "name": "registry",
      "discriminator": [
        47,
        174,
        110,
        246,
        184,
        182,
        252,
        218
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidOnlineValue",
      "msg": "Online value must be non-negative"
    },
    {
      "code": 6001,
      "name": "domainTooLong",
      "msg": "Domain name must be 253 characters or less"
    }
  ],
  "types": [
    {
      "name": "clientEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "parent",
            "type": "pubkey"
          },
          {
            "name": "registred",
            "type": "pubkey"
          },
          {
            "name": "until",
            "type": "i64"
          },
          {
            "name": "limit",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "clientInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "until",
            "type": "i64"
          },
          {
            "name": "limit",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "nodeEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "parent",
            "type": "pubkey"
          },
          {
            "name": "registred",
            "type": "pubkey"
          },
          {
            "name": "domain",
            "type": "string"
          },
          {
            "name": "online",
            "type": "i32"
          },
          {
            "name": "active",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "nodeInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "domain",
            "type": "string"
          },
          {
            "name": "active",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "registry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": "string"
          }
        ]
      }
    }
  ]
};
