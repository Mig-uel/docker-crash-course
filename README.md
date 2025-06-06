# Docker Crash Course

This repository contains a Docker Crash Course following the course by [Net Ninja](https://youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7&si=Vc7uYLtEEi1kod4f).

## Docker Images and Containers

### Docker Images

- **Image**: A read-only template used to create containers. It includes the application code, libraries, and dependencies.
  - Like blueprints for containers, defining what software and configurations are included.
  - Defines the environment in which a container runs, application code, any dependencies, and configurations (e.g. env variables), and commands to run.
  - Keep in mind that images are immutable, meaning they cannot be changed once created. If you need to make changes, you create a new image.
- **Base Image**: The starting point for building a Docker image, which can be an official image or a custom one.
- **Dockerfile**: A text file that contains instructions to build a Docker image. It specifies the base image, application code, dependencies, and configuration.
- **Docker Hub**: A public repository for Docker images where you can find official images and share your own.

### Docker Containers

- **Container**: A lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, runtime, libraries, and system tools.
  - Containers are instances of Docker images that can be run, stopped, and managed.
  - They are isolated from each other and the host system, ensuring that applications run consistently across different environments.
- **Running a Container**: When you run a Docker image, it creates a container based on that image. The container is an instance of the image and can be started, stopped, and managed independently.
- **Container Lifecycle**: Containers can be created, started, stopped, and removed. They can also be paused and resumed.
- **Container Orchestration**: Tools like Docker Compose and Kubernetes help manage multiple containers, allowing you to define and run multi-container applications.

### Example of Container in Action

**Image**:

```plaintext
Node 17
source code
dependencies
configurations
```

**Container**:

```plaintext
Running instance of the image
Runs our application
Isolated from the host system
Can be started, stopped, and managed independently
```

### Benefits of Using Docker

- **Portability**: Docker containers can run on any system that supports Docker, ensuring consistent behavior across different environments.
- **Isolation**: Each container runs in its own environment, preventing conflicts between applications and dependencies.
- **Scalability**: Docker makes it easy to scale applications by running multiple containers and managing them with orchestration tools.
- **Efficiency**: Containers share the host system's kernel, making them lightweight and fast to start compared to traditional virtual machines.

## Docker Images (continued)

Docker images are made up from several layers, each representing a change or addition to the image. When you build an image, Docker creates a new layer for each instruction in the Dockerfile. This layered architecture allows for efficient storage and sharing of images.

Each layer is cached, so if you rebuild an image with the same instructions, Docker can reuse the cached layers instead of rebuilding them from scratch. This speeds up the build process and reduces the amount of data that needs to be transferred when sharing images.

Typically, the first layer starts with what is known as a parent image, which typically contains the operating system and any necessary dependencies. From there, we can add our application code, libraries, and configurations to create a custom image.

The next layers are built on top of the parent image, adding our application code, dependencies, and configurations.

When we work with Docker, you'll also work with Docker Hub, which is a public repository for Docker images. You can find official images for popular software and libraries, as well as share your own images with the community.

We can get parent images from Docker Hub.

## Dockerfile

A Dockerfile is a text file that contains a series of instructions to build a Docker image. Each instruction in the Dockerfile creates a new layer in the image, allowing for efficient storage and sharing.

The Dockerfile specifies the base image, application code, dependencies, and configurations needed to create a custom Docker image. It is used to automate the process of building images, ensuring consistency and reproducibility.

```dockerfile
# Use an official Node.js runtime as a parent image
FROM node:17

# Set the working directory in the container
WORKDIR /app

# Copy files from the host to the container
COPY . .

# Install dependencies
RUN npm install

# Expose a port for the application
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
```

Each instruction in the Dockerfile serves a specific purpose:

- `FROM`: Specifies the base image to use for the Docker image.
- `WORKDIR`: Sets the working directory inside the container where subsequent commands will be executed.
- `COPY`: Copies files from the host system to the container.
- `RUN`: Executes a command inside the container, such as installing dependencies.
- `EXPOSE`: Informs Docker that the container listens on a specific port at runtime.
- `CMD`: Specifies the command to run when the container starts, such as starting the application.

When you build an image using a Dockerfile, Docker processes each instruction in order, creating a new layer for each one. This allows for efficient caching and reuse of layers, speeding up the build process and reducing the size of the final image.

## Building and Running Docker Images

To build and run Docker images, you typically follow these steps:

1. **Create a Dockerfile**: Write a Dockerfile that defines the base image, application code, dependencies, and configurations needed to build your custom image.
2. **Build the Image**: Use the `docker build` command to create a Docker image from the Dockerfile. This command processes each instruction in the Dockerfile and creates a new image with the specified layers.
   ```bash
   docker build -t my-app .
   ```
   The `-t` flag allows you to tag the image with a name (e.g., `my-app`), and the `.` indicates that the Dockerfile is in the current directory.
3. **Run the Container**: Use the `docker run` command to create and start a container from the built image. This command runs the application defined in the Dockerfile.
   ```bash
   docker run -p 3000:3000 --name my-app my-app
   ```
   The `-p` flag maps a port on the host machine (3000) to a port in the container (3000), allowing you to access the application running inside the container.
4. **Access the Application**: Once the container is running, you can access the application by navigating to `http://localhost:3000` in your web browser.
5. **Stop the Container**: You can stop the running container using the `docker stop` command followed by the container ID or name.
   ```bash
   docker stop my-app
   ```
6. **Remove the Container**: If you want to remove the stopped container, you can use the `docker rm` command.
   ```bash
   docker rm my-app
   ```

## Useful Docker Commands

Here are some useful Docker commands to manage images and containers:

- **List Docker Images**: To see all the images on your system, use:
  ```bash
  docker images
  ```
- **List Running Containers**: To see all running containers, use:
  ```bash
  docker ps
  ```
- **List All Containers**: To see all containers, including stopped ones, use:
  ```bash
  docker ps -a
  ```
- **Remove a Docker Image**: To remove an image, use:
  ```bash
  docker rmi my-app
  ```
- **Remove a Docker Container**: To remove a container, use:
  ```bash
  docker rm my-app
  ```
- **View Container Logs**: To view the logs of a running container, use:
  ```bash
  docker logs my-app
  ```
- **Execute a Command in a Running Container**: To run a command inside a running container, use:
  ```bash
  docker exec -it my-app bash
  ```
- **Build an Image**: To build an image from a Dockerfile, use:
  ```bash
  docker build -t my-app .
  ```
- **Run a Container**: To run a container from an image, use:
  ```bash
  docker run -p 3000:3000 --name my-app my-app
  ```
- **Stop a Container**: To stop a running container, use:
  ```bash
  docker stop my-app
  ```
- **Remove All Stopped Containers**: To remove all stopped containers, use:
  ```bash
  docker container prune
  ```

## Layer Caching

Docker uses a layer caching mechanism to optimize the build process of images. Each instruction in a Dockerfile creates a new layer, and Docker caches these layers to speed up subsequent builds.

When you build an image, Docker checks if it has already built a layer with the same content. If it finds a cached layer, it reuses it instead of rebuilding it, which saves time and resources.

This caching mechanism is particularly useful when you make changes to your application code or dependencies. Docker will only rebuild the layers that have changed, allowing you to quickly iterate on your application without having to rebuild the entire image from scratch.

This is especially beneficial for large images with many dependencies, as it reduces the amount of data that needs to be transferred and speeds up the build process.

**Reminder**: every line that we write in the Dockerfile creates a new layer. Each line adds a new layer to the image.

## Versioning Docker Images

When working with Docker images, it's important to manage versions effectively. This allows you to track changes, roll back to previous versions, and ensure consistency across different environments.

### Tagging Images

You can tag Docker images with version numbers or descriptive names to indicate their purpose or state. For example, you might tag an image as `my-app:1.0` for the first version of your application.

To tag an image, you can use the `docker build` command with the `-t` flag:

```bash
docker build -t my-app:1.0 .
```

You can also add additional tags to the same image:

```bash
docker tag my-app:1.0 my-app:latest
```

# Volumes

Volumes in Docker are used to persist data generated by and used by Docker containers. They allow you to store data outside of the container's filesystem, ensuring that it remains available even if the container is removed or recreated.

Volumes are particularly useful for applications that require persistent storage, such as databases or file uploads. By using volumes, you can ensure that your data is not lost when the container is stopped or removed.

### Creating and Using Volumes

To create a volume, you can use the `docker volume create` command:

```bash
docker volume create my-volume
```

You can then use this volume when running a container by specifying the `-v` flag:

```bash
docker run -v my-volume:/data my-app
```

This command mounts the `my-volume` volume to the `/data` directory inside the container, allowing the application to read and write data to that volume.

### Creating a Volume When Running a Container

You can also create a volume on the fly when running a container by using the `-v` flag without specifying an existing volume:

```bash
docker run --name my-app-container -p 3000:3000 -v absolute/path/on/host:/data -d --rm my-app
```

This command:

- Names the container `my-app-container`.
- Maps port 3000 on the host to port 3000 in the container.
- Mounts the specified absolute path on the host to the `/data` directory inside the container.
- Runs the container in detached mode (`-d`).
- Automatically removes the container when it stops (`--rm`).

### Excluding Files from Volumes

Sometimes, you may want to exclude certain files or directories from being in synced with the volume. For example, you might want to exclude the `node_modules` directory from being synced with the volume to avoid conflicts with dependencies installed inside the container.

A way to do this is to create a more specific volume mount to the directories you want to persist, rather than mounting the entire application directory.

For example:

```bash
docker run --name my-app-container -p 3000:3000 -v absolute/path/on/host/app:/app -v absolute/path/on/host/data:/data -d --rm my-app
```
