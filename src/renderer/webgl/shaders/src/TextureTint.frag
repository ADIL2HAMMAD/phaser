#define SHADER_NAME PHASER_TEXTURE_TINT_FS

precision mediump float;

uniform sampler2D uMainSampler;

varying vec2 outTexCoord;
varying float outTintEffect;
varying vec4 outTint;

void main()
{
    vec4 texel = vec4(outTint.rgb * outTint.a, outTint.a);

    if (outTintEffect == 1.0)
    {
        texel = texture2D(uMainSampler, outTexCoord);
        texel.rgb = mix(texel.rgb, outTint.rgb, texel.a);
    }
    else if (outTintEffect == 0.0)
    {
        texel *= texture2D(uMainSampler, outTexCoord);
    }

    gl_FragColor = texel;
}
