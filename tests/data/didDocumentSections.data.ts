import { testPublicIdentityKey } from './keys'
import { mockDid, mockKeyId, mockPublicKeyHex, mockIpfsHash } from './didDocument'

export const mockPubKeySectionCreationAttrs = {
  publicKey: testPublicIdentityKey,
  did: mockDid,
  keyId: mockKeyId
}

export const mockPubKeySectionJSON = {
  id: mockKeyId,
  type: 'Secp256k1VerificationKey2018',
  owner: mockDid,
  publicKeyHex: mockPublicKeyHex
}

export const mockAuthSectionJSON = {
  publicKey: mockKeyId,
  type: 'Secp256k1SignatureAuthentication2018'
}

export const mockServiceEndpointCreationAttrs = {
  did: mockKeyId,
  ipfsHash: mockIpfsHash
}

export const mockPubProfServiceEndpointJSON = {
  id: `${mockDid};jolocomPubProfile`,
  serviceEndpoint: `ipfs://${mockIpfsHash}`,
  description: 'Verifiable Credential describing entity profile',
  type: 'JolocomPublicProfile'
}