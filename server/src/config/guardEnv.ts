import 'dotenv/config'

const guardPort = ({ port }: { port: string | undefined }): string => {
  if (!port) {
    throw new Error('environment variable "PORT" is not defined')
  }

  return port
}

const guardSecretJWT = ({
  secretJwt
}: {
  secretJwt: string | undefined
}): string => {
  if (!secretJwt) {
    throw new Error('environment variable "SECRET_JWT" is not defined')
  }

  return secretJwt
}

const guardDbConnectionString = ({
  dbConnection
}: {
  dbConnection: string | undefined
}): string => {
  if (!dbConnection) {
    throw new Error(
      'environment variable "DB_CONNECTION_STRING" is not defined'
    )
  }

  return dbConnection
}

const PORT = guardPort({ port: process.env.PORT })
const secretJwt = guardSecretJWT({ secretJwt: process.env.SECRET_JWT })
const dbConnection = guardDbConnectionString({
  dbConnection: process.env.DB_CONNECTION_STRING
})

export { PORT, secretJwt, dbConnection }
