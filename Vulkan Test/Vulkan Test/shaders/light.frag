void main(void) {
	vec4 textureColor;
	vec4 color;
	vec3 lightDir;
	float lightIntensity;
	
	textureColor = texture(shaderTexture, texCoord);
	
	color = ambientLight;
	lightDir = -lightDirection;
	lightIntensity = clamp(dot(normal, lightDir), 0.0f, 1.0f);
	
	if (lightIntensity > 0.0f) {
		color += (diffuseLightColor * lightIntensity);
	}
	
	color = clamp(color, 0.0f, 1.0f);
	
	outputColor = color * textureColor;
}